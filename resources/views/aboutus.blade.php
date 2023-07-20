@extends('layout.app')


@section('content')

<main>
    <section class="section about has-bg-image" id="home" aria-label="home" style="background-image: url('{{ asset('/img/grupoAmigos.jpg') }}')">
        <div class="hero-content">
            <h2 class="wow animate__animated animate__fadeInLeft animate__slow">
                Second Life, New Smile
            </h2>
            <h1
                class="wow animate__animated animate__fadeInRight animate__slow"
            >
                Truekind, our passion is to make the world a better place for
                little ones. About Truekind: Creating a bright future for
                children and the world
            </h1>
        </div>
    </section>
    <section
        class="cta has-bg-image"
        aria-label="cta"
        >
    
        <div class="aboutUs-info">
            <p class="wow">
                At Truekind, our passion is to make the world a better place for
                little ones. We are an online platform dedicated to the exchange
                and sale of second-hand products, where solidarity and support
                for social causes are the heart of our mission..
            </p>

            <h2 class="question wow">What drives us?</h2>

            <p class="wow">
                We believe that every child deserves a happy and secure
                childhood, filled with opportunities to grow and prosper.
                Unfortunately, not all children have access to adequate
                resources to develop fully. That is why at Truekind we have
                decided to make a difference.
            </p>

            <h2 class="question wow">Our mission:</h2>
            <p class="wow">
                We believe in the power of collective action to create
                meaningful change. For each transaction made in Truekind, we
                allocate a small donation to various NGOs dedicated to improving
                the quality of life of children in disadvantaged situations.
                With every purchase and sale, all of our users contribute to
                worthy causes and become an active part of positive change.
            </p>

            <h2 class="question wow">
                Sustainability and environmental awareness:
            </h2>
            <p class="wow">
                Our commitment to the well-being of children goes beyond the
                social. We are also committed to caring for the environment and
                promoting sustainable practices. We encourage the reuse and
                recycling of children's products to reduce our impact on the
                planet and leave a better world for future generations.
            </p>

            <h2 class="question wow">Solidarity community:</h2>
            <p class="wow">
                At Truekind, we are all one big family committed to a common
                goal: providing opportunities and hope to children in need. Our
                community is made up of parents, families, and people with a
                heart set on child welfare. Together, we create a warm and
                supportive environment, where every transaction becomes an
                opportunity to make a difference.
            </p>

            <h2 class="question wow">Join our cause:</h2>
            <p class="wow">
                If you share our values ​​and dream of a more sustainable world,
                we invite you to Truekind. Every action counts, and by joining
                our platform, you too can be a change agent.
            </p>

            <h3 class="wow bottom-page">
                Together, we are building a more sustainable future. Thank you
                for being a part of Truekind!
            </h3>
        </div>
    </section>
</main>

@endsection