import React from "react";
import * as S from "./style";

export default function Header({ onDataUser }) {
  const [search, setSearch] = React.useState("");

  function sendData() {
    onDataUser(search);
  }

  return (
    <S.DivHead>
      <S.Tittle>Welcome to</S.Tittle>
      <S.Logo>GIFSEARCH</S.Logo>
      <S.Subtittle>Because a gif is worth a thousand words!</S.Subtittle>
      <form onSubmit={sendData}>
        <S.Input
          autoFocus
          type="text"
          placeholder="Search GIF"
          onChange={(e) => setSearch(e.target.value)}
        ></S.Input>
        <S.Button>Search</S.Button>
      </form>
    </S.DivHead>
  );
}
