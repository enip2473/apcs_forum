import Navbar from "./components/Navbar";
import ProblemList from "./components/ProblemList";
const problems = [
  {
    title: "問題一",
    author: "enip",
    content: "哈囉"
  },
  {
    title: "問題二",
    author: "enip",
    content: "hi"
  }
]

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full flex items-center sticky">
        <Navbar/>
      </div>
      <div className="w-full flex items-center">
        <ProblemList problems={problems}/>
      </div>
    </div>
  );
}
