// import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import WordsIBelieveIn from "../components/WordsIBelieveIn";
import Hero from "../components/Hero";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Babajan Patan - Full Stack Enginner, curious, learner"
      description="I am a full Stack Enginner | This is my portfolio website"
    >
      <Hero />
      <WordsIBelieveIn />
    </ContainerBlock>
  );
}
