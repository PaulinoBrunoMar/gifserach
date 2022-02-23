import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import * as S from "./style";

export default function Body({ quest }) {
  const renderGifs = () => {
    return quest.map((i) => {
      return (
        <S.GifDiv src={i.images.fixed_height.url} key={i.id}>
          <CopyToClipboard
            text={"https://media.giphy.com/media/" + i.id + "/giphy.gif"}
          >
            <S.Button>Copy</S.Button>
          </CopyToClipboard>
        </S.GifDiv>
      );
    });
  };

  return <S.BodyDiv>{renderGifs()}</S.BodyDiv>;
}
