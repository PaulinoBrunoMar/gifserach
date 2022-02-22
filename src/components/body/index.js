import React from "react";
import * as S from "./style";

export default function Render({ quest }) {
  const renderGifs = () => {
    return quest.map((i) => {
      return (
        <S.GifDiv key={i.id}>
          <img src={i.images.fixed_height.url} />
        </S.GifDiv>
      );
    });
  };

  return <S.BodyDiv>{renderGifs()}</S.BodyDiv>;
}
