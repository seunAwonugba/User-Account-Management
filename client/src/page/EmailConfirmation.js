import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baseUrl from "../base_url/base-url";

const params = window.location.search;
const id = new URLSearchParams(params).get("id");
const token = new URLSearchParams(params).get("token");

export default function EmailConfirmation() {
    const navigate = useNavigate();

    const validateToken = async () => {
        try {
            const response = await baseUrl.get(
                `/auth/confirm-email/?id=${id}&token=${token}`
            );
            if (response.data.success === true) {
                navigate("/login");
                toast.success(response.data.data);
            } else {
                navigate("/sign-up");
                toast.error(response.data.data);
            }
        } catch (error) {}
    };

    useEffect(() => {
        validateToken();
    }, []);

    return (
        <div className="message-screen">Email address confirmation screen</div>
    );
}
