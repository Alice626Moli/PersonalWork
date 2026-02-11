export function fetchUserActivities() {




    return new Promise((resolve) => {

        setTimeout(() => {
            resolve([

                "Login in successfully",
                "Visited Dashboard",
                "Updated profile settings",
                "Logged out and back in",

            ]);


        }, 1500);


    });


}