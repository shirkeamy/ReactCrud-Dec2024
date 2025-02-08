import { ILoginBody, ILoginMaster } from "./Interfaces"

export const validateUser = async (loginBody: ILoginBody): Promise<ILoginMaster> => {

    const result = await fetch(
        "https://localhost:7196/api/login/validate-user",
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginBody)
        }
    );

    return result.json()

}