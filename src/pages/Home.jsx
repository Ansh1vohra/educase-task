import { useNavigate } from "react-router";

export default function Home(){
    const nav=useNavigate();
    return(
            <div className="h-[100vh] w-md bg-slate-100 flex flex-col justify-end p-8 border-slate-200 border-2 border-solid rounded">
                <h2 className="text-3xl font-semibold mb-3">Welcome to PopX</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam explicabo earum eos quas? </p>
                <button onClick={()=>{
                    nav('/register');
                }} className="my-4 cursor-pointer w-full bg-violet-600 text-white p-3 rounded-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors">Create Account</button>
                <button onClick={()=>{
                    nav('/login');
                }} className="mb-4 cursor-pointer w-full bg-violet-300 p-3 rounded-md hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors">Already Registered? Login</button>
            </div>
    )
}