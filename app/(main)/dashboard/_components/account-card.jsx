"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import React, { useEffect } from 'react'
import Link from "next/link";
import { updateDefaultAccount } from '@/actions/accounts';
import useFetch from '@/hooks/use-fetch';
import { toast } from 'sonner';


const AccountCard = ({ account }) => {
    const { name, type, balance, id, isDefault } = account;
    const{
        loading : updateDefaultLoading,
        fn:updateDefaultFn,
        data: updatedAccount,
        error,
    }=useFetch(updateDefaultAccount);
 
    const handleDefaultChange =async(event) => {
        event.preventDefault();
        if(isDefault){
            toast.warning("you need atleast 1 default account");
            return;
        }
        await updateDefaultFn(id);
   
    };

    useEffect(()=>{
        if(updatedAccount?.success){
            toast.success("default account updated successfully");
        }
        [updatedAccount,updateDefaultLoading]
    });
    
    useEffect(()=>{
        if(error){
            toast.error(error.message || "failed to update default account");
        }
        [error]
    });

     
    
    
    return (
        <Card className="hover:shadow-md transition-shadow group relative bg-gray-900 text-white">
            <Link href={`/account/${id}`} >



                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium capitalize">{name}</CardTitle>
                    <Switch checked={isDefault} onClick = {handleDefaultChange}
                    disabled={updateDefaultLoading}
                         />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold '>
                        ₹{parseFloat(balance).toFixed(2)}

                    </div>
                    <p className="text-xs text-muted-foreground">
                        {type.charAt(0) + type.slice(1).toLowerCase()} Account
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                        Income
                    </div>
                    <div className="flex items-center">
                        <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                        Expense
                    </div>
                </CardFooter>


            </Link>

        </Card>


    );

}

export default AccountCard;


// timeline 2.21.00