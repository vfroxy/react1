const UserInfo = ({name, age}) => {

    return (
        <section>
         <h2>Cześć, {name}!</h2>
        <p>Masz {age} lat.</p>
        <p>Za rok będziesz mieć {age + 1} lat.</p>
</section>
);
}

export default UserInfo;