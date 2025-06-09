
import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import React from 'react'
import { getUserAccounts } from '@/actions/dashboard';
import AccountCard from "./_components/account-card";
import { BudgetProgress } from "./_components/buget-progress";
import { getCurrentBudget } from "@/actions/budget";
import  getDashboardData  from "@/actions/dashboard";
import  DashboardOverview  from "./_components/transaction-overview";


import { Suspense } from "react";



async function DashboardPage() {
    const accounts = await getUserAccounts();

    const defaultAccount = accounts?.find((account) => account.isDefault);

    let budgetData = null;
    if (defaultAccount) {
        budgetData = await getCurrentBudget(defaultAccount.id);
    }
    const transaction = await getDashboardData();

    return <div className='px-5 space-y-8'>
        {/* budegt progress */}

        {defaultAccount && (
            <BudgetProgress
                initialBudget={budgetData?.budget}
                currentExpenses={budgetData?.currentExpenses || 0}
            />
        )}

        {/* dashboard overview */}
        <Suspense fallback={"loading overvie..."}>
            <DashboardOverview
                accounts={accounts}
                transactions={transaction || []}
            />

        </Suspense> 

        {/* accounts grid */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <CreateAccountDrawer>
                <Card className="h-full min-h-[180px] hover:shadow-md transition-shadow cursor-pointer border-dashed flex bg-gray-900">
                    <CardContent className="flex flex-col items-center justify-center text-muted-foreground w-full pt-5">
                        <Plus className="h-10 w-10 mb-2" />
                        <p className="text-sm font-medium">Add new account</p>
                    </CardContent>
                </Card>
            </CreateAccountDrawer>

            {accounts.length > 0 &&
                accounts.map((account) => (
                    <AccountCard key={account.id} account={account} />
                ))
            }
        </div>

    </div>
}

export default DashboardPage;