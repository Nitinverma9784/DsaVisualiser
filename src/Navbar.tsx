import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Zap, BarChart3, Search, Network, GitBranch, Info, Sun, Moon } from "lucide-react";
import { Toaster, toast } from "sonner";
import { ThemeProvider } from "./context/theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showComingSoonToast = () => {
    toast.success("Coming Soon!", {
      icon: <Info className="h-5 w-5 text-blue-500" />,
      duration: 2500,
      style: {
        borderRadius: "12px",
        border: "1px solid rgba(59, 130, 246, 0.5)",
        background: "white",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "12px",
        fontWeight: "500",
      },
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider value={{ themeMode: theme, darkTheme: () => setTheme("dark"), lightTheme: () => setTheme("light") }}>
        <Toaster position="top-center" richColors closeButton />

        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent 
  bg-gradient-to-r from-blue-500 to-purple-500 
  dark:bg-none dark:text-white">
  DSA Visualizer
</span>

                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/race"
                  className="text-slate-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                  Race Mode
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-slate-700 dark:text-white flex items-center">
                      Algorithms
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-md">
                    <DropdownMenuItem>
                      <Link to="/algorithms/sorting" className="flex items-center w-full">
                        <BarChart3 className="h-4 w-4 mr-2 text-purple-500" />
                        Sorting
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/algorithms/searching" className="flex items-center w-full">
                        <Search className="h-4 w-4 mr-2 text-blue-500" />
                        Searching
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={showComingSoonToast}>
                      <span className="flex items-center w-full cursor-pointer">
                        <Network className="h-4 w-4 mr-2 text-green-500" />
                        Graph
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={showComingSoonToast}>
                      <span className="flex items-center w-full cursor-pointer">
                        <GitBranch className="h-4 w-4 mr-2 text-yellow-500" />
                        Dynamic Programming
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  to="/about"
                  className="text-slate-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="ml-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>

              <div className="md:hidden flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="border-slate-200 mr-2 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
                <button
                  onClick={toggleMenu}
                  className="text-slate-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 absolute w-full left-0 right-0 top-16 z-50 shadow-md">
              <div className="px-4 py-2 space-y-2">
                <Link to="/race" className="block text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-md">
                  <Zap className="h-5 w-5 mr-2 inline-block text-yellow-500" />
                  Race Mode
                </Link>
                <Link to="/algorithms/sorting" className="block text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-md">
                  <BarChart3 className="h-5 w-5 mr-2 inline-block text-purple-500" />
                  Sorting
                </Link>
                <Link to="/algorithms/searching" className="block text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-md">
                <Search className="h-5 w-5 mr-2 text-blue-500" />
                  Searching
                </Link>

                <Link to="/about" className="block text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-2 rounded-md">
                  
                  About
                </Link>
              </div>
            </div>
          )}
        </nav>
      </ThemeProvider>
    </>
  );
}
