---
title: An introduction to Twig
description: Twig, the flexible, fast, and secure template engine. Twig is more concise, readable and secure than using PHP for your templates.
image: https://picsum.photos/800/250?random=5
tags: ['front-end', 'css', 'twig']
published: '01/10/2021'
---
## What is Twig?
### What is template engine?
![An introduction to Twig](https://www.lilengine.co/sites/default/files/inline-images/templateEngine_gif.gif "Screenshot of code")
Template engine (template preprocess) is known as a technique that gives developers the ability to separate HTML/CSS from application logic PHP code.

### What is Twig?
Twig was created by SensioLabs who develop the Symfony2 framework. Twig is a template engine for PHP which is used by many Open-sources projects like Drupal8, Symfony, phpBB, eZPublish...; and many frameworks like Slim, Yii, Lavarel, Codeigniter...

## Why should I use Twig?
* **Fast**: Twig compiles templates down to plain optimized PHP code. The overhead compared to regular PHP code was reduced to the very minimum.
* **Secure**: Twig has a sandbox mode to evaluate untrusted template code. This allows Twig to be used as a template language for applications where users may modify the template design
* **Flexible**: Twig is powered by a flexible lexer and parser. This allows the developer to define their own custom tags and filters, and to create their own DSL

## Setup
* **Requirement**: PHP version up to 5.2.7
* **Install via composer**: composer install require twig/twig:~2.0
* Or **clone from git**: git clone git://github.com/twigphp/Twig.git

## Basic using
There are two kinds of delimiters in Twig
```
{% ... %}: Using to execute statements such as if, for-loops
{{...}}:  Using to prints the result of an expression to the template
```
**Variables**: Twig supports get variable by the simple way, we can get values of Object or Array by
```
{{ foo.bar }}
{{ foo[‘bar’] }}
```
The variables can be set by
```
{% set foo = ‘foo’ %}
{% set foo = [1,2] %}
{% set foo = {‘foo’: ‘bar’} %}
```
**Filters**: Filters can be used to sort an array when print it out
```
{% for number in numbers|sort %}
  {{ number }}
{% endfor %}
```
**Functions**: Twig supports many functions (see more here), for example dump()
```
{{ dump(user) }}
```
Control Structure: Control command of Twig is used inside {% ... %}
```
<ul>
  {% for user in users %}
      <li>{{ user.username }}</li>
  {% endfor %}
</ul>

{% if users|length > 0 %}
  <ul>
    {% for user in users %}
        <li>{{ user.username }}</li>
    {% endfor %}
  </ul>
{% endif %}
```
**Comment**: We should comment each line to make it easy to understand
```
{# note: disabled template
  {% for user in users %}
    …
  {% endfor %}
#}
```
**Macros**: Macro like a function, it can be used to reuse markup HTML to avoid unnecessary repeat. A macro is defined by macro tag
```
{% macro input(name, value, type, size) %}
  <input type=”{{ type|default(‘text’) }}” name=”{{ name }}” value=”{{ value|e }}” size=”{{ size|default(20) }}” />
{% endmacro %}
```
Using Macro
```
{% imoprt “forms.html” as forms %}
<p>{{ forms.input(‘username’) }}</p>
```
**Expressions**: Twig allows you to use expressions anywhere you want, it’s similar to PHP
```
{% set greeting = ‘Hello’ %}
{% set name = ‘Feb’ %}

{{ greeting ~ name|lower }} {# Hello feb #}
{{ (greeting ~ name)|lower }} {# hello feb #}
```
Array and Object can be nested 
```
{% set foo = [1, {“foo”: “bar”}] %}
```
**Math**: Twig allows you to calculate with values: +, -, /, %, //, *, **
**Logic**: You can combine multiple expressions with the following operator: and, or, not, (expr)
**Comparisons**: The following comparison operators are supported in any expression: ==, !=, <, >, >=, <=. You can also check if a string start with or end with another string
```
{% if ‘Feb’ starts with ‘F’ %}
  ...
{% endif %}

{% if ‘Feb’ ends with ‘b’ %}
  ...
{% endif %}
```
## Template
Twig supports include other templates 
```
{{ include(‘sections/articles/sidebar.html’) }}
```
We can reuse content from parent templates
```
{% block sidebar %}
  <h3>Title of content</h3>
  …
  {{ parent() }}
{% endblock %}
```
