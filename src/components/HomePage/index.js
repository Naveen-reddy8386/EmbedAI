import { Component } from "react";
import { GoPlus } from "react-icons/go";
import { RiCompassFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsFilePersonFill } from "react-icons/bs";
import { RiVoiceprintFill } from "react-icons/ri";

import "./index.css";

class HomePage extends Component {
  state = { click: true };

  btn = () => {
    // Update state using setState
    this.setState((prevState) => ({
      click: true,
    }));
  };
  bt = () => {
    // Update state using setState
    this.setState((prevState) => ({
      click: false,
    }));
  };

  aside = () => (
    <aside>
      <div className="tog">
        <h1 className="head">Character.ai</h1>
        <button onClick={this.bt}>
          <MdKeyboardDoubleArrowLeft className="menuA" />
        </button>
      </div>
      <div className="createDiv">
        <button className="createBtn">
          {" "}
          <GoPlus className="plusIcon" />
          Create
        </button>
        <div className="hov">
          <div className="d-flex">
            <BsFilePersonFill className="pd" />
            <h3>Character</h3>
          </div>
          <div className="d-flex">
            <RiVoiceprintFill className="pd" />
            <h3>Voice</h3>
          </div>
        </div>
      </div>
      <br />
      <button className="discoverBtn">
        {" "}
        <RiCompassFill className="comp" />
        Discover
      </button>
      <button className="sign_in">Sign in</button> <br />
      <button className="sign_up">Sign up</button>
    </aside>
  );

  render() {
    const { click } = this.state;
    console.log(click);
    return (
      <div className="container">
        {click ? (
          this.aside()
        ) : (
          <button onClick={this.btn} className="menu-button">
            <HiOutlineMenuAlt2 className="menu" />
          </button>
        )}
        <div className="container_">
          <div className="search_con">
            <div className="search">
              <IoSearch />
              <input
                className="si"
                type="search"
                placeholder="Search for Characters"
              />
            </div>
          </div>
          <div className="cont">
            <div>
              <p className="p">Time to feel your best?</p>
              <h1 className="p">Get Healthy</h1>
            </div>
            <div className="outter">
              <div className="inner">
                <div className="inner-in">
                  <img src="https://characterai.io/i/80/static/avatars/uploaded/2023/7/28/kkHVTmudZ1v434Rt1gwDCvkBnBFv4cv2EaVvrLuDRzk.webp?webp=true&anim=0" />
                  <p>Creative Helper</p>
                </div>
                <p>
                  I am Gym Assistant. How can I help with your fitness goals?
                  Please also do your own research and consult a medical
                  professional if you have any concerns!
                </p>
              </div>
              <div className="inner">
                <div className="inner-in">
                  <img src="https://characterai.io/i/80/static/avatars/uploaded/2023/1/30/gAKz4DRFDqYfmS2_7cQNq-anu45jPPLaFZPNxjpqAGI.webp?webp=true&anim=0" />
                  <p>BrainStorm Buddy</p>
                </div>
                <p>
                  I'm your personal life coach here to help you live your best
                  life and give you guidance and support whenever you need it
                </p>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <img src="https://characterai.io/i/200/static/avatars/uploaded/2023/4/1/nnC9m4fPspIY7nYjRFXBhPkvX-uLCNqItrXzpqzyP2w.webp?webp=true&anim=0" />
              <div>
                <h4>leon Kennedy</h4>
                <p className="pili">By @Nxikzz</p>
                <p className="pili">
                  When you and Leon had been cornered by ganados, he managed to
                  find a hiding spot for you two.
                </p>
              </div>
            </li>
            <li>
              <img src="https://characterai.io/i/200/static/avatars/uploaded/2022/10/6/XEuYFfBedAIUYYKG09lLK3IlOrFiy2yJ08teobJmCvU.webp?webp=true&anim=0" />
              <div>
                <h4>Zero Two</h4>
                <p className="pili">By @Xomu</p>
                <p className="pili">I'm Zero Two from Darling in the Franxx</p>
              </div>
            </li>
            <li>
              <img src="https://characterai.io/i/200/static/avatars/TextAdventure3.png?webp=true&anim=0" />
              <div>
                <h4>Text Adventure Game</h4>
                <p className="pili">By @Nxikzz</p>
                <p className="pili">
                  When you and Leon had been cornered by ganados, he managed to
                  find a hiding spot for you two.
                </p>
              </div>
            </li>
            <li>
              <img src="https://characterai.io/i/200/static/avatars/DjNext.png?webp=true&anim=0" />
              <div>
                <h4>DJ Next</h4>
                <p className="pili">By @Kayslay</p>
                <p className="pili">
                  Let's play a text-based adventure game. I'll be your guide.
                  You are caught upside-down in a sticky web of silk three feet
                  off the ground.
                </p>
              </div>
            </li>
          </ul>
          >
        </div>
      </div>
    );
  }
}
export default HomePage;
