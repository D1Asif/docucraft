'use client'

import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useState } from "react"
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";

export default function Search({ docs }) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase())
    });
    setSearchResult(found);
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  }

  const closeSearchResult = (event) => {
    event.preventDefault();
    router.push(event.target.href)
    setSearchTerm("");
  }

  return (
    <>
    <div className="hidden lg:block lg:max-w-md lg:flex-auto">
      <button type="button"
        className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex">
        <Image src="/search.svg" alt="search" className="h-5 w-5" height={50} width={50} />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 focus:border-none focus:outline-none"
          value={searchTerm}
          onChange={handleChange}
        />
        <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">Ctrl </kbd>
          <kbd className="font-sans">K</kbd></kbd>
      </button>
    </div>
    {searchTerm && searchTerm.trim().length > 0 && (
      <SearchResult searchTerm={searchTerm} results={searchResult} closeSearchResult={closeSearchResult} />
    ) }
    </>
  )
}
