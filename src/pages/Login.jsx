import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../context/FirebaseConfig"; 
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const navigate = useNavigate();
    
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      setIsPanelOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsPanelOpen(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={togglePanel}
        className="fixed top-6 right-6 w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-800 transition-colors z-50"
      >
        {user ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )}
      </button>

      {isPanelOpen && (
        <div className="absolute top-20 right-6 w-80 bg-white rounded-lg shadow-xl p-6 z-40 animate-fade-in">
          <h2 className="text-xl font-bold mb-4 text-blue-950 text-center">
            Welcome to Video Call App
          </h2>
          
          {user ? (
            <div className="text-center">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="mb-2 font-medium">Welcome, {user.displayName}!</p>
              <p className="mb-4 text-gray-600 text-sm">{user.email}</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-4 text-gray-600">Please login to continue</p>
              <button
                onClick={handleGoogleLogin}
                className="bg-blue-950 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 w-full mx-auto"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
                Login with Google
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
