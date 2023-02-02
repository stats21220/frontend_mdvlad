import { WithLayout } from "@/layout/layout";
import { useState } from "react";
import { Button, Htag, Ptag, Rating, Tag } from "../components/index";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag color={"primary"} tag={"h1"}>
        hz
      </Htag>
      <Htag color={"black"} tag={"h2"}>
        hz
      </Htag>
      <Htag color={"white"} tag={"h3"}>
        hz
      </Htag>
      <Button color={"primary"}>primary</Button>
      <Button color={"primary"} arrow="right">
        primary
      </Button>
      <Button color={"green"} arrow="right">
        green
      </Button>
      <Button color={"orange"} arrow="down">
        orange
      </Button>
      <Ptag size="s">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo,
        repellendus ratione ipsa, quidem, aliquam ipsam et amet officia soluta
        expedita tempora obcaecati recusandae. Nostrum odit hic ex vitae
        aliquam!
      </Ptag>
      <Ptag>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo,
        repellendus ratione ipsa, quidem, aliquam ipsam et amet officia soluta
        expedita tempora obcaecati recusandae. Nostrum odit hic ex vitae
        aliquam!
      </Ptag>
      <Ptag size="l">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit illo,
        repellendus ratione ipsa, quidem, aliquam ipsam et amet officia soluta
        expedita tempora obcaecati recusandae. Nostrum odit hic ex vitae
        aliquam!
      </Ptag>
      <Tag href="/" size="s">
        tag
      </Tag>
      <Tag href="/" color="green">
        tag
      </Tag>
      <Tag href="/" color="orange">
        tag
      </Tag>
      <Rating rating={3}></Rating>
      <Rating rating={rating} setRating={setRating} isEditable></Rating>
    </>
  );
}

export default WithLayout(Home);
