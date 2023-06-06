import { Component, Fragment } from "react";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import UserListItem from "../../component/section/userlistitem";
import Glitch from 'glitch-javascript-sdk';

class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentPage: 1,
            loading: false,
            hasMore: true,
            error: null,
        };
    }

    componentDidMount() {
        this.loadUsers();
        this.setupIntersectionObserver();
    }

    loadUsers = () => {
        const { currentPage, users } = this.state;
        this.setState({ loading: true });

        Glitch.api.Users.list({ page: currentPage }).then(response => {
            const newUsers = response.data.data;
            this.setState(prevState => ({
                users: [...prevState.users, ...newUsers],
                currentPage: prevState.currentPage + 1,
                loading: false,
                hasMore: newUsers.length > 0,
                error: null,
            }));
        }).catch(error => {
            this.setState({ loading: false, error });
        });
    };

    setupIntersectionObserver = () => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        this.observer = new IntersectionObserver(this.handleIntersection, options);
        this.observer.observe(this.loadingRef);
    };

    handleIntersection = (entries) => {
        const { loading, hasMore } = this.state;
        const target = entries[0];

        if (target.isIntersecting && !loading && hasMore) {
            this.loadUsers();
        }
    };

    componentWillUnmount() {
        this.observer.disconnect();
    }

    render() {
        const { users, loading, error } = this.state;

        return (
            <Fragment>
                <Header />
                <PageHeader title={Glitch.util.LabelManager.getUserLabel(true, true)} curPage={'Users'} />

                <div className="shop-single">
                    <div className="container">
                        {users.map(user => (
                            <UserListItem key={user.id} user={user} />
                        ))}

                        {loading && <div>Loading...</div>}
                        {error && <div>Error: {error.message}</div>}
                        
                        <div ref={ref => (this.loadingRef = ref)} />
                    </div>
                </div>

                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(UsersPage);
