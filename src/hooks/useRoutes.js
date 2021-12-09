import React from 'react'
import Vendor from "@view/Vendor";

export const useRouter = (roles) => {

    if (roles === 'vendor') {
        return <Vendor />
    }

    // return <Login />

}