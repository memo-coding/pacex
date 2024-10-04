require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { getVideo, getAllVideos } = require("./controllers/VideosControllers");
const {
  getAllBrochures,
  getBrochure,
} = require("./controllers/BrochureControllers");
const {
  getAllPodcasts,
  getPodcast,
} = require("./controllers/PodcastsControllers");
const { getDoc, getAllDocs } = require("./controllers/DocsControllers");
const { getAllNews, getNew } = require("./controllers/NewsControllers");
const { getAllMaps, getMap } = require("./controllers/MapsControllers");
const { getAllImages, getImage } = require("./controllers/ImageControllers");
const {
  getAllFavourites,
  addFavourite,
} = require("./controllers/FavouritesControllers");

const app = express();
const PORT = process.env.PORT || 6000;
const MONGO_URL = process.env.MONGO_URL;
app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error("Database Connection Error:", err));

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: "success", message: "hello from server" });
});

// Videos
app.get("/api/v1/videos", getAllVideos);
app.get("/api/v1/videos/:id", getVideo);

// Brochures
app.get("/api/v1/brochures", getAllBrochures);
app.get("/api/v1/brochures/:id", getBrochure);

// Podcasts
app.get("/api/v1/podcasts", getAllPodcasts);
app.get("/api/v1/podcasts/:id", getPodcast);

// Docs
app.get("/api/v1/docs", getAllDocs);
app.get("/api/v1/docs/:id", getDoc);

// News
app.get("/api/v1/news", getAllNews);
app.get("/api/v1/news/:id", getNew);

// Story Maps
app.get("/api/v1/maps", getAllMaps);
app.get("/api/v1/maps/:id", getMap);

// Images
app.get("/api/v1/images", getAllImages);
app.get("/api/v1/images/:id", getImage);

// Favourites addFavourite
app.get("/api/v1/favourites", getAllFavourites);
app.post("/api/v1/favourites/add", addFavourite);

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
