import Link from "next/link";

function Home (){
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="/week-2">Week 2 Assignment</Link></li>
        <li><Link href="/week-3">Week 3 Assignment</Link></li>
      </ul> 
    </main>
  );
}

export default Home;