
const HasAccess = {
    
    userInList(user_id, listOfUsers) {

        let found = false; 

        if(listOfUsers) {

           
            listOfUsers.forEach((user) => {

                if(user.id == user_id){
                    found= true;
                    
                }
            });
        }

        return found;
    }
}

export default HasAccess;