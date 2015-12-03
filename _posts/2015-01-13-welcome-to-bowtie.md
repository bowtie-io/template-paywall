---
layout: post
title:  Welcome to your ⋈ BowTie Blog
subtitle:  We wrote this cheatsheet to get you started.
author: john
date: 2015-02-06 15:36:37
masthead-img: false
masthead-img-pat: /img/backgrounds/bg2.jpg
categories: Hello-World BowTie
elsewhere:
elsewhere-url:
comments: true
share: true

---

Welcome to your new blog. Look familiar? ⋈ BowTie blogs are powered by [Jekyll][jekyll] - the easy to use static content generator. You can use this blog like any other Jekyll site; write markdown or html, then commit to publish. But, before you start publishing, you probably want to configure your site's [global settings](https://bowtie.io/help/bowtie-site-configuration/).

We've tailored your blog to look sharp, including support for authorship, disqus comments, social-sharing, categories, and more. For a complete guide to blogging with BowTie, checkout our guide to [blogging with markdown](https://bowtie.io/help/blogging-with-bowtie/). Here are some cliff notes:

## Publishing

You can write with any text editor. You’ll find the post you are currently reading in your `_posts` directory. Go ahead and edit it and push your site files to see your changes.

BowTie is push to deploy. Commit and push your files to your BowTie repo, and all posts in the `_posts` will publish immediately. You can also work in draft mode. You'll find a draft post in your `_drafts` directory that explains how.

To work locally, install the [bowtie-io client]() and run `bowtie serve`. Your site will be visible at localhost:4000

Your project posts page can be found at “%projectName%/blog/“ by default. To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext`.

## Formatting

BowTie uses Markdown for writing. Markdown is a a simple syntax to learn - even if you don't know HTML or another language. It's really versatile. Common formatting is done with the inclusion of special characters. Advanced styling is done using the `theme.scss` detailed in [this post](https://bowtie.io/news/style-customize-bowtie-frontend/). You can even mix in HTML as needed.

_*Pro tip: open this post in a text editor to see how the sausage is made. Or, read our [markdown guide](https://bowtie.io/news/blogging-with-bowtie/)._

### Markdown Quick Start

#### Text

Make text _Italic_ or **Bold** text by wrapping it with asterisks or underscores.

{% highlight html %}
*italic* or _italic_
**bold** or __bold__
***bold-italic*** or ___bold-italic___
{% endhighlight %}


&nbsp;

#### Links

BowTie supports [inline](http://example.com) and [reference][1] links

{% highlight html %}
[inline](http://example.com)
or
[reference][1]
[1]: http://example.com
{% endhighlight %}


&nbsp;

#### Headings

Headings are made with hashmarks preceding the word. The number of hashes will set the heading level.  

{% highlight html %}
# Heading 1
## Heading 2
{% endhighlight %}

&nbsp;

#### Images

Inserting images is very similar to adding a link. And we've added some flexibility by deploying [Bootstrap](https://getbootstrap.com) and a few helper classes for easy formatting on the fly.

{% highlight html %}
![markdown](https://bowtie.io/img/markdown.png "Markdown Mofo! Do you speak it?"){: .quarter .pull-left .right-buffer}
{% endhighlight %}

![markdown](https://bowtie.io/img/markdown.png "Markdown Mofo! Do you speak it?"){: .quarter .pull-left .right-buffer}

<div class="clearfix">&nbsp;</div>


&nbsp;

#### Lists

For a super fast unordered list, precede the item with a *, -, or + and they will be converted to bullets. Use a a number and period for ordered lists.

{% highlight html %}
* BowTie
* Scarf
* Ascot

or

1. BowTie
2. Necktie
3. Bolo
{% endhighlight %}


&nbsp;

#### Quotes

Add a '>' in front of a line to convert the text into

> a block - quote.

{% highlight html %}
> a block-quote.
{% endhighlight %}



&nbsp;

#### Horizontal Rules

Use three dashes, or the standard HTML fallback \<hr>\ to add a horizontal rule

{% highlight html %}
---
or
<hr>
{% endhighlight %}


&nbsp;

####  Tables

Tables in markdown use dashes and pipes to suggest the the table cells.

{% highlight html %}
| Date | Title | Notes |
| ---  | --- | --- |
| 12-01 | Ship | Get sh#t out the door |
| 12-03 | Launch | The sooner we do this, the better |
{% endhighlight %}

##### Result

| Date | Title | Notes |
| ---  | --- | --- |
| 12-01 | Ship | Get sh#t out the door |
| 12-03 | Launch | The sooner we do this, the better |

&nbsp;

####  Code Snippets

BowTie also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight html %}
When referencing `code` inline  
{% endhighlight %}

Or reference `code` inline.  

&nbsp;


Happy writing! Have fun and let us know how you're doing!

There's a lot more to learn about [Blogging with BowTie](https://bowtie.io/help/blogging-with-bowtie/). You can download additional templates on our [Github page](https://github.com/bowtie-io).

Check out the [Jekyll docs][jekyll] to learn how to get the most out of Jekyll.

[jekyll]:      http://jekyllrb.com
