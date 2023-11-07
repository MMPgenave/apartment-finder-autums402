import React from "react";
// import "./SliderCss.css";
import { useEffect } from "react";
// import { PlayersData } from "./data";
import styled from "styled-components";
import tw from "twin.macro";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useUiContext } from "../context/UiContext";
import { SLIDE } from "../actions";
const Slider = () => {
  const { state, dispatch } = useUiContext();
  //   const [player, setPlayer] = useState(PlayersData[0]);
  const Item = state.Image_Stock;
  const Timer = setTimeout(() => {
    // console.log("SLIDER");

    // setPlayer((prev) => {
    //   if (player.id === 2) {
    //     return PlayersData[0];
    //   } else {
    //     return PlayersData[player.id + 1];
    //   }
    // });

    dispatch({ type: SLIDE });
  }, 4000);
  useEffect(() => {
    return () => clearTimeout(Timer);
  });

  return (
    <SliderContent>
      <img src={Item.imgUrl} alt={Item.type} />
    </SliderContent>
  );
};
const SliderContent = styled.section.attrs({})`
  & {
    img {
      ${tw`  brightness-100 object-contain   rounded-lg md:h-[25rem] h-[18rem] w-[100%] `}
    }
  }
`;
export default Slider;
