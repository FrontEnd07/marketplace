import React, { lazy } from 'react'
import Vendor from "@view/Vendor";

// const Vendor = lazy(() => import("@view/Vendor"))

export const useRouter = (roles) => {

    if (roles === 'vendor') {
        return <Vendor />
    }

    // return <Login />

}