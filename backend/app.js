const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/data", (req, res, next) => {
  const visitsData = [
    {
      id: "1",
      companyName: "Company1",
      requiredVisits: "3",
      completedVisits: "2",
      lastVisitDate: "12/Oct/2019",
      visits: [
        { title: "visit-title 1", content: "info 1" },
        { title: "visit-title 2", content: "info 2" },
        { title: "visit-title 3", content: "info 3" },
        { title: "visit-title 4", content: "info 4" }
      ]
    },
    {
      id: "2",
      companyName: "Company2",
      requiredVisits: "4",
      completedVisits: "1",
      lastVisitDate: "6/Oct/2019",
      visits: [
        { title: "visit-title 1", content: "info 1" },
        { title: "visit-title 2", content: "info 2" }
      ]
    },
    {
      id: "3",
      companyName: "Company3",
      requiredVisits: "2",
      completedVisits: "1",
      lastVisitDate: "3/Oct/2019",
      visits: [
        { title: "visit-title 1", content: "info 1" },
        { title: "visit-title 2", content: "info 2" },
        { title: "visit-title 3", content: "info 3" }
      ]
    },
    {
      id: 4,
      companyName: "Company4",
      requiredVisits: "1",
      completedVisits: "0",
      lastVisitDate: "17/Oct/2019",
      visits: [{ title: "visit-title 1", content: "info 1" }]
    },
    {
      id: "5",
      companyName: "Company5",
      requiredVisits: "3",
      completedVisits: "2",
      lastVisitDate: "20/Oct/2019",
      visits: [
        { title: "visit-title 1", content: "info 1" },
        { title: "visit-title 2", content: "info 2" }
      ]
    },
    {
      id: "6",
      companyName: "Company6",
      requiredVisits: "2",
      completedVisits: "1",
      lastVisitDate: "27/Oct/2019",
      visits: [
        { title: "visit-title 1", content: "info 1" },
        { title: "visit-title 2", content: "info 2" },
        { title: "visit-title 3", content: "info 3" },
        { title: "visit-title 4", content: "info 4" }
      ]
    }
  ];

  res.status(200).json(visitsData);
});

module.exports = app;
