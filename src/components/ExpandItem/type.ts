import { ReactNode } from "react"

export interface ExpandItemProps {
    label: string
    content: ReactNode
    isActive: boolean
    onClick(): void
}