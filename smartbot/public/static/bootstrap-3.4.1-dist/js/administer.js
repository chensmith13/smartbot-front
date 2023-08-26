$(function () {
    $("class_list").click(function () {
        $.ajax({ url:"/sqlclassservlet",
            type:"POST",
            dataType:"text",
            success:function () {

            }
        })
    })
})
