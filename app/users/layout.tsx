// components
import DesktopView from "@/app/_components/DesktopView"
import MobileView from "@/app/_components/MobileView"

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
    return (
        <DesktopView>
            {children}
            <MobileView />
        </DesktopView>
    )
}
