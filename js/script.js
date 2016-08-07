$(function(){
    $('.carousel').carousel('cycle');
    
    //Add anim classes
    $('.subsection .subcontent').addClass('animated slideInRight');
    //Show 1st subcontent of all subsection
    $('.subsection .subcontent:first-child').show();
    
    //when user clicks on .subcat-links
    $('body').on('click', '.sublink', function(){
        var thisSubsection = $(this).closest('.subsection');
                       
        //mark only this sublink as active
        thisSubsection.find('.sublink').removeClass('active');
        $(this).addClass('active');
        
        //show only this subcontent
        thisSubsection.find(".content .subcontent").hide();
        var subcontentID = $(this).attr('data-content-id');
        $('#'+subcontentID).show();
    });
    
    
    //hide header on scroll down, show on scroll up
    var prevScrollTop = $('body').scrollTop();
    var currScrollTop = 0;
    $(window).on('scroll', function(){
        currScrollTop = $('body').scrollTop();
        
        if (currScrollTop < 100) {
            return;
        }
        else if (currScrollTop > prevScrollTop) {
            $('.main-header').slideUp(200);
        } else {
            $('.main-header').slideDown(200);
        }
        
        prevScrollTop = currScrollTop;
    })
    
    
    //commenting
    if ($('.post-comments-container').length > 0) {
            $('.post-comments-container').comments({
                profilePictureURL: 'https://app.viima.com/static/media/user_profiles/user-icon.png',
                getComments: function(success, error) {
                    success(dummyCommentsArray);
                }
            });
    }
    
    
})



var dummyCommentsArray = [{
                id: 1,
                created: '2015-10-01',
                content: 'Lorem ipsum dolort sit amet',
                fullname: 'Simon Powell',
                upvote_count: 2,
                user_has_upvoted: false
            },
            {
                id: 2,
                created: '2015-02-01',
                content: 'bla bla bsdf fg nij tgijiu sfsf rgeg',
                fullname: 'Max Powell',
                upvote_count: 5,
                user_has_upvoted: false
            },
            {
                id: 3,
                created: '2015-05-01',
                content: 'asd lkjl eoriut kjsfh tedh tdh ohh bse ipsum dolort sit amet',
                fullname: 'Simon Olswel',
                upvote_count: 9,
                user_has_upvoted: false
            }]