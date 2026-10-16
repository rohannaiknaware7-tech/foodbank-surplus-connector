
const courses = [

    {
        name: "Full Stack Development",
        icon: "bi-code-slash",
        duration: "6 Months",
        level: "Intermediate",
        description:
            "Learn HTML, CSS, JavaScript, Bootstrap, jQuery and modern web development.",
        color: "primary"
    },


    {
        name: "Data Analytics",
        icon: "bi-bar-chart-fill",
        duration: "5 Months",
        level: "Intermediate",
        description:
            "Learn data analysis, visualization and practical business intelligence.",
        color: "success"
    },


    {
        name: "Digital Marketing",
        icon: "bi-megaphone-fill",
        duration: "4 Months",
        level: "Beginner",
        description:
            "Learn SEO, social media marketing, content strategy and analytics.",
        color: "warning"
    },


    {
        name: "Artificial Intelligence",
        icon: "bi-robot",
        duration: "8 Months",
        level: "Advanced",
        description:
            "Explore artificial intelligence, machine learning and Generative AI.",
        color: "dark"
    },


    {
        name: "UI/UX Design",
        icon: "bi-palette-fill",
        duration: "4 Months",
        level: "Beginner",
        description:
            "Learn user interface and user experience design principles.",
        color: "danger"
    },


    {
        name: "Cloud Computing",
        icon: "bi-cloud-fill",
        duration: "6 Months",
        level: "Advanced",
        description:
            "Learn cloud platforms, deployment, storage and infrastructure concepts.",
        color: "info"
    }

];


/* =========================================================
   EVENTS DATA
========================================================= */

const events = [

    {
        title: "Web Development Workshop",
        date: "15 August 2026",
        type: "Workshop",
        description:
            "A hands-on workshop covering HTML, CSS, Bootstrap and JavaScript."
    },


    {
        title: "Career Guidance Seminar",
        date: "22 August 2026",
        type: "Seminar",
        description:
            "Industry experts discuss career opportunities in technology."
    },


    {
        title: "Coding Competition",
        date: "05 September 2026",
        type: "Competition",
        description:
            "Test your programming skills and compete with fellow students."
    }

];


/* =========================================================
   DOCUMENT READY
   jQuery
========================================================= */

$(document).ready(function () {


    /* =====================================================
       LOAD COURSES
    ====================================================== */

    let courseHTML = "";


    courses.forEach(function (course) {

        courseHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="course-card p-4">

                    <div class="course-icon">

                        <i class="bi ${course.icon}"></i>

                    </div>


                    <h3 class="mt-4">

                        ${course.name}

                    </h3>


                    <p>

                        ${course.description}

                    </p>


                    <div class="d-flex justify-content-between mb-3">

                        <span class="badge text-bg-${course.color}">

                            ${course.level}

                        </span>


                        <span class="text-muted">

                            ${course.duration}

                        </span>

                    </div>


                    <button
                        class="btn btn-outline-primary w-100 course-btn"
                        data-course="${course.name}">

                        View Program

                    </button>

                </div>

            </div>

        `;

    });


    $("#courseContainer").html(courseHTML);



    /* =====================================================
       LOAD EVENTS
    ====================================================== */

    let eventHTML = "";


    events.forEach(function (event, index) {

        eventHTML += `

            <div class="col-md-4">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body p-4">

                        <span class="badge bg-primary mb-3">

                            ${event.type}

                        </span>


                        <h4>

                            ${event.title}

                        </h4>


                        <p class="text-primary fw-semibold">

                            <i class="bi bi-calendar3"></i>

                            ${event.date}

                        </p>


                        <p class="text-muted">

                            ${event.description}

                        </p>


                        <button
                            class="btn btn-sm btn-outline-primary event-btn"
                            data-index="${index}">

                            Learn More

                        </button>

                    </div>

                </div>

            </div>

        `;

    });


    $("#eventsContainer").html(eventHTML);



    /* =====================================================
       NOTICE
    ====================================================== */

    $("#noticeText").text(
        "Admissions are now open for the 2026 academic session."
    );



    /* =====================================================
       NAVIGATION ACTIVE LINK
    ====================================================== */

    $(".nav-link").on("click", function () {

        $(".nav-link").removeClass("active");

        $(this).addClass("active");


        // Close mobile menu

        $(".navbar-collapse").removeClass("show");

    });



    /* =====================================================
       COURSE BUTTON
    ====================================================== */

    $(document).on("click", ".course-btn", function () {

        const courseName =
            $(this).data("course");


        alert(
            "You selected: " +
            courseName +
            "\n\nPlease complete the admission form to apply."
        );


        $("html, body").animate({

            scrollTop:
                $("#admission").offset().top - 70

        }, 700);

    });



    /* =====================================================
       EVENT BUTTON
    ====================================================== */

    $(document).on("click", ".event-btn", function () {

        const index =
            $(this).data("index");


        const event =
            events[index];


        alert(

            event.title +
            "\n\n" +
            "Date: " +
            event.date +
            "\n\n" +
            event.description

        );

    });



    /* =====================================================
       FORM VALIDATION
    ====================================================== */

    $("#admissionForm").on("submit", function (event) {

        event.preventDefault();


        const name =
            $("#studentName").val().trim();


        const email =
            $("#studentEmail").val().trim();


        const phone =
            $("#phone").val().trim();


        const program =
            $("#program").val();


        const terms =
            $("#terms").is(":checked");


        let valid = true;


        /* ================================================
           REGEX PATTERNS
        ================================================= */

        const namePattern =
            /^[A-Za-z ]{3,50}$/;


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        const phonePattern =
            /^[6-9][0-9]{9}$/;



        /* =================================================
           NAME VALIDATION
        ================================================= */

        if (!namePattern.test(name)) {

            $("#studentName")
                .removeClass("input-success")
                .addClass("input-error");

            valid = false;

        } else {

            $("#studentName")
                .removeClass("input-error")
                .addClass("input-success");

        }



        /* =================================================
           EMAIL VALIDATION
        ================================================= */

        if (!emailPattern.test(email)) {

            $("#studentEmail")
                .removeClass("input-success")
                .addClass("input-error");

            valid = false;

        } else {

            $("#studentEmail")
                .removeClass("input-error")
                .addClass("input-success");

        }



        /* =================================================
           PHONE VALIDATION
        ================================================= */

        if (!phonePattern.test(phone)) {

            $("#phone")
                .removeClass("input-success")
                .addClass("input-error");

            valid = false;

        } else {

            $("#phone")
                .removeClass("input-error")
                .addClass("input-success");

        }



        /* =================================================
           PROGRAM VALIDATION
        ================================================= */

        if (program === "") {

            $("#program")
                .removeClass("input-success")
                .addClass("input-error");

            valid = false;

        } else {

            $("#program")
                .removeClass("input-error")
                .addClass("input-success");

        }



        /* =================================================
           TERMS VALIDATION
        ================================================= */

        if (!terms) {

            valid = false;

        }



        /* =================================================
           FINAL RESULT
        ================================================= */

        if (!valid) {

            $("#formMessage").html(`

                <div class="alert alert-danger">

                    <strong>Form Error!</strong>

                    Please check all required fields
                    and enter valid information.

                </div>

            `);


            return;

        }



        $("#formMessage").html(`

            <div class="alert alert-success">

                <strong>Application Submitted!</strong>

                Thank you, ${name}.
                Our admissions team will contact you soon.

            </div>

        `);


        /* =================================================
           RESET FORM
        ================================================= */

        $("#admissionForm")[0].reset();


        $(".form-control, .form-select")
            .removeClass(
                "input-success input-error"
            );

    });



    /* =====================================================
       REAL-TIME NAME VALIDATION
    ===================================================== */

    $("#studentName").on("input", function () {

        const value =
            $(this).val().trim();


        if (/^[A-Za-z ]{3,50}$/.test(value)) {

            $(this)
                .removeClass("input-error")
                .addClass("input-success");

        } else {

            $(this)
                .removeClass("input-success");

        }

    });



    /* =====================================================
       REAL-TIME EMAIL VALIDATION
    ===================================================== */

    $("#studentEmail").on("input", function () {

        const value =
            $(this).val().trim();


        if (
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {

            $(this)
                .removeClass("input-error")
                .addClass("input-success");

        } else {

            $(this)
                .removeClass("input-success");

        }

    });



    /* =====================================================
       REAL-TIME PHONE VALIDATION
    ===================================================== */

    $("#phone").on("input", function () {

        const value =
            $(this).val().trim();


        if (
            /^[6-9][0-9]{9}$/.test(value)
        ) {

            $(this)
                .removeClass("input-error")
                .addClass("input-success");

        } else {

            $(this)
                .removeClass("input-success");

        }

    });



    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    $(window).on("scroll", function () {

        if ($(this).scrollTop() > 400) {

            $("#backToTop").fadeIn();

        } else {

            $("#backToTop").fadeOut();

        }

    });


    $("#backToTop").on("click", function () {

        $("html, body").animate({

            scrollTop: 0

        }, 700);

    });



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    $('a[href^="#"]').on("click", function (event) {

        const target =
            $(this).attr("href");


        if (
            target !== "#" &&
            $(target).length
        ) {

            event.preventDefault();


            $("html, body").animate({

                scrollTop:
                    $(target).offset().top - 70

            }, 700);

        }

    });



    /* =====================================================
       CARD HOVER EFFECT
    ===================================================== */

    $(".course-card").hover(

        function () {

            $(this).find(".course-icon")
                .addClass("shadow");

        },

        function () {

            $(this).find(".course-icon")
                .removeClass("shadow");

        }

    );



    /* =====================================================
       CONSOLE PROJECT INFORMATION
    ===================================================== */

    console.log(
        "Global Tech Institute application loaded successfully."
    );

    console.log(
        "Courses available:",
        courses.length
    );

    console.log(
        "Events available:",
        events.length
    );

});

