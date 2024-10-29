import type { GlobalCartState } from "@/types/Cart"
import { atom } from "jotai"

export const cartStore = atom<GlobalCartState[]>([])
