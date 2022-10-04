import Header from "../components/Header.tsx";
import LiveSearch from "../islands/LiveSearch.tsx";


export default function Search() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Header />
      <LiveSearch />
    </div>
  )
}