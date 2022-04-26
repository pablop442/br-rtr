const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      signIn: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Bad email or password");
            return false;
          }
          const data = await resp.json();
          console.log("this came from backend", data);
          sessionStorage.setItem("jwt-token", data.token);
          setStore({
            token: data.token,
            name: data.user.name,
          });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },
      createNewUser: async (name, last_name, email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            last_name: last_name,
            email: email,
            password: password,
          }),
          mode: "cors",
        };
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/user", opts);
          const data = await resp.json();
          console.log("this came from backend", data);
        } catch (error) {
          console.error("There has been an error", error);
        }
      },
      logout: () => {
        sessionStorage.removeItem("jwt-token");
        setStore({
          token: null,
          name: null,
          last_name: null,
          email: null,
          password: null,
        });
      },

      submitReview: async (name, location, date, description, rate) => {
        const store = getStore();

        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + store.token,
          },
          body: JSON.stringify({
            name: name,
            location: location,
            date: date,
            description: description,
            rate: rate,
          }),
          mode: "cors",
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/beers",
            opts
          );
          if (resp.status !== 201) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log("this came from backend", data);
          setStore({
            beerName: data.name,
            location: data.location,
            date: data.date,
            description: data.description,
            rate: data.rate,
          });
          return true;
        } catch (error) {
          console.error("There has been an error", error);
        }
      },
      getAllBeers: async () => {
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/beers",
            opts
          );
          if (resp.status !== 200) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log(data);
          setStore({
            data: data,
          });
          return true;
        } catch (error) {
          console.error("There was an error ", error);
        }
      },
      getUserBeer: () => {
        const store = getStore();
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
        };
        fetch(process.env.BACKEND_URL + "/api/beer-of-user", opts)
          .then((resp) => resp.json())
          .then((data) => {
            const beersArr = data.map((beer) => {
              return {
                name: beer.name,
                location: beer.location,
                date: beer.date,
                description: beer.description,
                rate: beer.rate,
                reviewer_id: beer.reviewer_id,
              };
            });
            console.log(beersArr);
            setStore({
              ...store,
              beersArr: beersArr,
            });
          })
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      getUserData: async (id) => {
        const store = getStore();
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/user/" + id,
            opts
          );
          if (resp.status !== 200) {
            alert("Something went wrong");
            return false;
          }
          const data = await resp.json();
          console.log(data);
          setStore({
            ...store,
            name: data.name,
          });
          return true;
        } catch (error) {
          console.error("There was an error ", error);
        }
      },
    },
  };
};

export default getState;
