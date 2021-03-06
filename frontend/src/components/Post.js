import React from "react";
import { Avatar, Card } from "antd";
import { HeartFilled, UserOutlined } from "@ant-design/icons";

function Post({ post }) {
  const { author, caption, location, photo, tag_set, like_user_set } = post;
  const { username, name, avatar_url } = author;
  return (
    <div>
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        actions={[<HeartFilled />]}
      >
        {/* <img src={`http://localhost:8000` + avatar_url} /> */}
        <Card.Meta
          avatar={
            <Avatar
              icon={
                <img
                  src={`http://localhost:8000` + avatar_url}
                  alt={username}
                />
              }
            />
          }
          title={location}
          description={caption}
        />
      </Card>
      {/* <img src={photo} alt={caption} style={{ width: "100px" }} /> */}
      {caption},{location}
    </div>
  );
}

export default Post;
