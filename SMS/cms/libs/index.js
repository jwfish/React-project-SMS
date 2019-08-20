const {
    find,
    ObjectId,
    insert,
    Update,
    Remove

} = require('./mdb');
!(async () => {



    //查
    let data = await find('students', {
        name: '狄仁杰'
    });


    //增
    // let data = await insert('students', [{
    //     // name: '陈+v',
    //     // age: '20',
    //     // email: 'aaa@qq.com'
    // }]);

    //改
    // let data = await Update('students', [{
    //     a: 1
    // }, {
    //     name: '扑街仔'

    // }])

    // let data = await Remove('students', {
    //     a: '16'
    // })


    console.log(data);










})();