const HttpError = require("../models/http-error");

const apiList = [
  {
    url: "https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator",
    getQuery: (data) => ({
      query: {
        ski_site: Number(data.ski_site),
        from_date: data.from_date,
        to_date: data.to_date,
        group_size: Number(data.group_size),
      },
    }),
  },
];

const searchHotels = async (req, res, next) => {
  const hotelsList = [];
  const requestData = req.body;
  try {
    const responses = await Promise.all(
      apiList.map(async (api) => {
        const res2 = await fetch(api.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(api.getQuery(requestData)),
        }).then((res) => res.json());
        return res2;
      })
    );
    responses.forEach((res) => hotelsList.push(...res.body.accommodations));
    res.status(200).send(hotelsList);
  } catch (error) {
    res.status(404).json({
      message: "There was a problem with fetching the data. " + error.message,
    });
  }
};

exports.searchHotels = searchHotels;
