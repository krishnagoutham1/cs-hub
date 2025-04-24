import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginOtp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(3);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [resendCount, setResendCount] = useState(0);
  const maxResendAttempts = 3;
  const navigate = useNavigate();
  // Timer countdown logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      if (resendCount < maxResendAttempts) {
        setResendDisabled(false);
      }
    }
  }, [timer, resendCount]);

  // Disable resend button after maxResendAttempts
  useEffect(() => {
    if (resendCount === maxResendAttempts) {
      setResendDisabled(true);
      setTimer(0);
    }
  }, [resendCount]);

  // Handle OTP input changes
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Allow only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input if valid input is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle resend logic
  const handleResend = () => {
    setTimer(6);
    setResendDisabled(true);
    setResendCount(resendCount + 1);
  };

  const handleSubmit = async () => {
    const payload = {
      otp: otp.join(""),
      userId: "52d422a2-7a13-44ef-89a2-c0115c5c10eb",
    };
    try {
      const res = await axios.post(
        "http://localhost:4000/auth/login/verify-otp",
        payload,
        { withCredentials: true }
      );
      if (res.data.success) {
        navigate("/dashboard");
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              className="w-10 h-10 text-center text-xl border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
          disabled={otp.some((digit) => digit === "")}
        >
          Login
        </button>
        <div className="flex items-center justify-between mt-4">
          <div className="text-gray-400">
            0:{String(timer).padStart(2, "0")}
          </div>
          <button
            className="text-blue-500 disabled:opacity-50"
            onClick={handleResend}
            disabled={resendDisabled}
          >
            Resend OTP
          </button>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded mt-2">
          <div
            style={{ width: `${(resendCount / maxResendAttempts) * 100}%` }}
            className="h-2 bg-blue-500 rounded"
          ></div>
        </div>

        {/* Message about resends left */}
        <div className="text-sm text-gray-500 mt-2">
          {resendCount > 0
            ? resendCount === maxResendAttempts
              ? "Maximum resend attempts reached"
              : maxResendAttempts - resendCount + " resend attempts left"
            : null}
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
