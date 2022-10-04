

export default function Header() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
      src="/logo.svg"
      class="w-32 h-32"
      alt="the fresh logo: a sliced lemon dripping with juice"
    />
    <div class="my-6">
      <h2 class="text-4xl mb-2 font-black">
        Welcome to `fresh` albums repository.
      </h2>
      <p class="text-lg text-gray-500 font-semibold">You can search for albums by name.</p>
    </div>
    </div>
  )
}