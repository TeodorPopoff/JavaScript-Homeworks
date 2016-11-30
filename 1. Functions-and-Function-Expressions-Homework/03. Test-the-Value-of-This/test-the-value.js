function testContext() {
    console.log(this);
}

testContext();

function func() {
    testContext();
}

func();

var obj = new testContext();
