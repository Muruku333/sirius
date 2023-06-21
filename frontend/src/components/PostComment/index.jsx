import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useTimer from "../../hooks/useTimer";
import { Link } from "react-router-dom";
import { verifiedType } from "../../helpers";
import { Icon } from "@iconify/react";
import generateClassName from "../../helpers/generateClassBEM";
import "./styles/PostComment.css";
import UserAvatarStory from "../UserAvatarStory";

function PostComment({ commentData }) {
  const { comment, date, userComment } = commentData;
  const { avatarUrl, name, nick, accountVerified } = userComment;
  const [currentTimer, currentFormat] = useTimer(date);

  const isVerified = accountVerified !== "none";
  const { icon, text } = verifiedType(accountVerified);

  const primaryClassName = "post-comment-component";
  const customClassName = generateClassName(primaryClassName);

  return (
    <div className={primaryClassName}>
      <div to={`/p/${nick}`} className={customClassName("avatar-link")}>
        <UserAvatarStory avatarUrl={avatarUrl} nick={nick} size="40" borderWidth="2" />
      </div>
      <section className={customClassName("comment-area")}>
        <div className={customClassName("comment-area__name-and-timer")}>
          <Link
            to={`/p/${nick}`}
            className={customClassName(
              "comment-area__name-and-timer__name-area"
            )}
          >
            <span
              className={customClassName(
                "comment-area__name-and-timer__name-area__name"
              )}
            >
              {name}
              {isVerified && (
                <div
                  title={text}
                  className={customClassName(
                    "comment-area__name-and-timer__name-area__name__verified"
                  )}
                >
                  <Icon icon={icon} className={`verified-${accountVerified}`} />
                </div>
              )}
            </span>
          </Link>
          <span
            className={customClassName("comment-area__name-and-timer__timer")}
          >
            {currentTimer}
            {currentFormat}
          </span>
        </div>
        <p className={customClassName("comment-area__comment")}>{comment}</p>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.userReducer.token,
});

export default connect(mapStateToProps)(PostComment);

PostComment.propTypes = {
  commentData: PropTypes.shape(),
};
