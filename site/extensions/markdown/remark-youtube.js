import { visit } from 'unist-util-visit'


const htmlEmbed = 
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/@@YoutubeId@@" title="YouTube video player" frameborder="0" allow="accelerometer; auoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class='d-none d-lg-block mx-auto my-5 youtube-embed '></iframe>
  <iframe width="320" height="180" src="https://www.youtube.com/embed/@@YoutubeId@@" title="YouTube video player" frameborder="0" allow="accelerometer; auoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class='d-block d-lg-none mx-auto my-5 youtube-embed '></iframe>`

export default function remarkYoutube() {
  return (tree, file) => {
    visit(tree, 'paragraph', (node) => {
      const children = node.children;
      children.forEach((child, index) => {
        if (child.type === 'link' && child.url.indexOf("https://www.youtube.com") === 0) {

          let match = /\/watch\?v=([^&]+)/i.exec(child.url);

          if (match) {

            let id = match[1];
            node.children[index] = {
              type: "html",
              value: htmlEmbed.replace(/@@YoutubeId@@/g, id)
            };

          }

        }
      })
    });
  }
}