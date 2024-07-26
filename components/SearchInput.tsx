"use client"

import qs from "query-string";
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Input from "./Input";
import { useSearch } from "@/hooks/useSearchValue";

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const debouncedValue = useDebounce<string>(value, 500);
    const { setSearchValue } = useSearch();

    useEffect( () => {
        const query = {
           title: debouncedValue, 
        };

        const url = qs.stringifyUrl({
            url: "/search",
            query: query
        });

        router.push(url);
        setSearchValue(debouncedValue);

    }, [debouncedValue, router]);

    return (
        <Input
            placeholder="What do you want to play?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default SearchInput