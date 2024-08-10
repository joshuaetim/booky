<template>
  <div>
    <nav class="bg-cyan-800/60 sticky py-5 top-0 border-b border-gray-100 drop-shadow-lg">
      <div class="container flex md:justify-between w-full">
        <div class="flex items-center justify-between ml-3 text-3xl font-bold font-comic text-white w-full md:w-auto">
          <a href="#">Logo</a>

          <span class="md:hidden block mx-2 text-3xl p-2" @click="menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </span>

        </div>
        <ul :class="menuClass"
          class="absolute z-10 top-20 px-10 text-center md:opacity-100 md:static md:p-0 left-0 w-full md:flex justify-between md:space-x-4 md:w-1/4 items-center text-2xl font-serif font-medium transition-all duration-500 ease-in">
          <li class="md:my-0 my-10">
            <a href="#" class="hover:text-gray-600 transition duration-500 ease-in ">About</a>
          </li>
          <li class="md:my-0 my-10">
            <a href="#" class="hover:text-gray-600 transition duration-500 ease-in ">Services</a>
          </li>
          <li class=" md:my-0 my-10">
            <a href="#" class="hover:text-gray-600 transition duration-500 ease-in ">Contact</a>
          </li>
        </ul>
        <a href="#"
          class="hidden md:block opacity-0 md:opacity-100 bg-cyan-400 px-5 py-3 font-mono font-bold text-center hover:bg-cyan-300 transition duration-500 ease-in">Get
          Started</a>
      </div>
    </nav>

    <section id="hero">
      <div class="lg:flex container md:justify-between items-center md:flex-row">
        <div class="items-center text-center lg:text-left lg:leading-tight mt-10 lg:mt-0 mx-auto mb-10 lg:mb-0 lg:w-1/2">
          <h1 class="text-5xl font-extrabold">
            Book Awesome Vacations <br> at Cheap Rates.
          </h1>
          <p class="mt-8">
            <a href="#" class="bg-cyan-400 px-5 py-4 font-mono font-bold text-center">Get Started</a>
          </p>
        </div>
        <div class="lg:w-1/2 ml-auto">
          <img src="./assets/images/hero.jpg" alt="hero">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuClass: {
        // "bg-gray-100": true,
        "opacity-0": true
      },
      open: false
    }
  },
  methods: {
    menu() {
      this.open = !this.open
      this.menuClass = {
        "opacity-0": !this.open
      }
      if (this.open) {
        this.menuClass["bg-gray-100"] = true
      }
    }
  }
}
</script>