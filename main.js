function renderSections(sections) {
    let imageAtRight = true;

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];

        const imgDiv = $("<div>")
            .addClass(["col-md-4", "d-flex", "align-items-center"])
            .append(
                $("<img>")
                    .addClass("img-fluid")
                    .attr("src", section.imgSrc)
            );
        const container = $("<div>")
            .addClass("container");

        if (section.content) {

            const contentDiv = $("<div  style='padding-bottom: 0.5em'>")
                .addClass(["col-md-8", "d-flex", "flex-column", "justify-content-center"])
                .append(
                    $("<span>")
                        .addClass("align-self-start")
                        .html(section.title)
                )
                .append(
                    $(`<p style='font-size: 22px;text-align: justify;'>`)
                        .html(section.content)
                );
            const rowDiv = $("<div>")
                .addClass("row")
                .append(() => imageAtRight ? imgDiv : contentDiv)
                .append(() => imageAtRight ? contentDiv : imgDiv);

            container.append(rowDiv);

            imageAtRight = !imageAtRight;

        } else if (section.blockquote) {
            const figure =
                $("<figure>")
                    .addClass(["text-center"])
                    .append(
                        $("<blockquote>")
                            .addClass(["text-center"])
                            .append(
                                $("<p style='font-size: 20px;'>")
                                    .text(section.blockquote)
                            )
                    )
                    .append($("<br>"))
                    .append(
                        $("<figcaption style='font-size: 20px;'>")
                            .addClass(["blockquote-footer"])
                            .append(
                                $("<cite>")
                                    .attr("title", section.title)
                                    .text(section.title)
                            )
                    )
            container.append(figure);
        } else if (section.nav) {
            const figure =
                $("<figure>")
                    .addClass(["text-center"])
                    .append(
                        $("<blockquote>")
                            .addClass(["text-center"])
                            .append(
                                $("<p style='font-size: 20px;'>")
                                    .html(section.nav)
                            )
                    )
            container.append(figure);
        }


        $("<section style='scroll-snap-align: start;'>")
            .attr("data-aos", "fade")
            .append(container).appendTo("main");


    }
}



