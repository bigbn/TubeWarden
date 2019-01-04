import Channel from "../models/db/channel";
import Video from "../models/db/video";

import sequelize from "../sequelize";

sequelize.sync({alter: true})
    .then(() => {
        Channel.findAll(). then (() => {
            Video.findAll()
            .then((vl) => {
                sequelize.close();
            });
        });

    });
