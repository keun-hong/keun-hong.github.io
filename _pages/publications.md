---
layout: single
description: "Peer-reviewed publications by Keun Hong Son in evolutionary genomics, comparative epigenomics, and cancer biology."
permalink: /publications/
author_profile: true
classes: wide
---

<div class="pub-section-header pub-section-header--first">
    <h3>First-Authored Publications</h3>
</div>

{% for pub in site.data.publications.first_author %}
<div class="pub-card pub-card--first">
    <img src="{{ site.baseurl }}/images/publications/{{ pub.image }}" alt="{{ pub.title }}" class="pub-card__image" loading="lazy">
    <div class="pub-card__content">
        <strong class="pub-card__title">{{ pub.title }}</strong><br>
        {{ pub.authors }}<br>
        <strong><em>{{ pub.journal }}.</em></strong> {{ pub.year }}
        (<a href="{{ pub.article_url }}" target="_blank">Article</a>{% if pub.pdf_url %}, <a href="{{ pub.pdf_url }}" target="_blank">PDF</a>{% endif %})
        {% if pub.featured %}
        <br>Featured in
        {% for feat in pub.featured %}
            <strong><em><a href="{{ feat.url }}" target="_blank">{{ feat.name }}</a></em></strong>{% unless forloop.last %}, {% endunless %}
        {% endfor %}
        {% endif %}
        {% if pub.badges %}
        <span class="pub-card__badges">
            {% for badge in pub.badges %}
            <a href="{{ badge.url }}" target="_blank"><img src="{{ badge.img }}" alt="{{ badge.label }}" class="pub-card__badge"></a>
            {% endfor %}
        </span>
        {% endif %}
    </div>
</div>
{% endfor %}

<div class="pub-section-header pub-section-header--co">
    <h3>Co-Authored Publications</h3>
</div>

<div class="pub-list--co">
{% for pub in site.data.publications.co_author %}
<div class="pub-card--co">
    <strong>{{ pub.title }}</strong>
    <p class="pub-card--co__meta">
        {{ pub.authors }}<br>
        <strong><em>{{ pub.journal }}.</em></strong> {{ pub.year }}
        (<a href="{{ pub.article_url }}" target="_blank">Article</a>{% if pub.pdf_url %}, <a href="{{ pub.pdf_url }}" target="_blank">PDF</a>{% endif %})
    </p>
</div>
{% endfor %}
</div>

<div class="pub-overview">
  <br>
  <img src="{{ site.baseurl }}/images/publications/Publications.webp" alt="Publications overview" class="pub-overview__image" loading="lazy">
</div>
