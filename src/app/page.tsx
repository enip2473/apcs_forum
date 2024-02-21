'use client';
import Navbar from '@/components/Navbar';
import Editor from '@/components/Editor';
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Head from 'next/head';

const judges = ["AP325", "ZeroJudge", "TIOJ", "Codeforces", "Atcoder", "CSES"]

function App() {
  return (
    
    <div className="w-full flex-col min-h-screen items-center">
      <Head>
        <title>我要問問題</title>
      </Head>

      <div className="w-full flex items-center sticky">
        <Navbar/>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-3/5 justify-begin font-bold text-lg">我要問問題</div>
      </div>

      <div className="w-full flex justify-center">
          <div className='w-3/5 flex p-2 justify-between'>
            <div className="w-1/6">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Judge 來源" />
                </SelectTrigger>
                <SelectContent>
                  {
                    judges.map((judge, index) => 
                      <SelectItem key={index} value={judge}>{judge}</SelectItem>
                    )
                  }
                </SelectContent>
              </Select>
            </div>

            <Input className="w-1/6" placeholder='題號'/>

            <Input className="w-3/5" placeholder='問題標題'/>

          </div>
      </div>  

      <div className="w-full flex justify-center">
        <div className="w-3/5 justify-begin font-bold text-lg">問題詳述</div>
      </div>
 

      <div className="w-full flex justify-center">
          <Editor/>
      </div> 

      <div className="w-full flex justify-center">
        <div className="w-3/5 justify-begin font-bold text-lg">我的程式碼</div>
      </div>
  
    </div>
  );
}

export default App;