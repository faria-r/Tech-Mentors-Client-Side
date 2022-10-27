import { ListGroup } from "flowbite-react";
import React from "react";
import {
  FaDiscord,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSlack,
  FaSnapchat,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div className="w-48 mt-16 mr-8">
      <ListGroup>
        <ListGroup.Item active={true}>Follow Us On:</ListGroup.Item>

        <ListGroup.Item>
          <FaLinkedin className="text-indigo-500 mr-4 text-xl"></FaLinkedin>{" "}
          LinkedIn
        </ListGroup.Item>
        <ListGroup.Item>
          <FaFacebook className="text-indigo-500 mr-4 text-xl"></FaFacebook>{" "}
          Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaTwitter className="text-indigo-500 mr-4 text-xl"></FaTwitter>{" "}
          Twitter
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram className="text-indigo-500 mr-4 text-xl"></FaInstagram>{" "}
          Instagram
        </ListGroup.Item>
        <ListGroup.Item>
          <FaDribbble className="text-indigo-500 mr-4 text-xl"></FaDribbble>{" "}
          Dribble
        </ListGroup.Item>
        <ListGroup.Item>
          <FaSnapchat className="text-indigo-500 mr-4 text-xl"></FaSnapchat>{" "}
          Snapchat
        </ListGroup.Item>
        <ListGroup.Item>
          <FaDiscord className="text-indigo-500 mr-4 text-xl"></FaDiscord>{" "}
          Discord
        </ListGroup.Item>
        <ListGroup.Item>
          <FaSlack className="text-indigo-500 mr-4 text-xl"></FaSlack> Slack
        </ListGroup.Item>
        <ListGroup.Item>
          <FaGithub className="text-indigo-500 mr-4 text-xl"></FaGithub> Github
        </ListGroup.Item>
        <ListGroup.Item>
          <FaYoutube className="text-indigo-500 mr-4 text-xl"></FaYoutube>{" "}
          Youtube
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default RightSideBar;
