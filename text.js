
$(document).ready(function(){
    $(".btn-todo").click(function(){
        $(".extincion, .endemicas, .migratorias").show();
    });

    $(".btn-extincion").click(function(){
        $(".endemicas, .migratorias").hide();
        $(".extincion").show();
    });

    $(".btn-endemicas").click(function(){
        $(".extincion, .migratorias").hide();
        $(".endemicas").show();
    });

    $(".btn-migratorias").click(function(){
        $(".extincion, .endemicas").hide();
        $(".migratorias").show();
    });
});


