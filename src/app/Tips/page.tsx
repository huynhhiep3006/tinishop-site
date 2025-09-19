// app/coloring/page.tsx
export const metadata = {
  title: "Simple Coloring Ideas for Kids",
  description:
    "Fun, calming, and skill-building coloring activities for kids of different ages.",
};

export default function Tips() {
  return (
    
      <div
        role="main"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}
        // giữ nguyên markup gốc để tránh lỗi JSX do style string
        dangerouslySetInnerHTML={{
          __html: `
        <body style="margin: 0; padding: 0; font-family: 'Josefin Sans', Arial, Helvetica, sans-serif; background: linear-gradient(135deg, #fef7f7 0%, #fafafd 100%); color: #111111; line-height: 1.6;">
    
    <main role="main" style="max-width: 1200px; margin: 0 auto; padding: 32px 24px;">
        
        <!-- Hero Section -->
        <section aria-label="Hero" style="background: #ffffff; border: 2px solid #f8e7e7; border-radius: 20px; padding: 40px 32px; margin-bottom: 24px; box-shadow: 0 8px 32px rgba(255, 182, 193, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: linear-gradient(135deg, #ffb6c1, #ffc0cb); border-radius: 50%; opacity: 0.1;"></div>
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
                <div style="background: linear-gradient(135deg, #ff69b4, #ff91a4); padding: 12px; border-radius: 16px; display: flex; align-items: center; justify-content: center;">
                    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.33H5v-.92l8.06-8.06.92.92L5.92 19.58zM20.71 7.04a1 1 0 0 0 0-1.41L18.37 3.3a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.84z"/>
                    </svg>
                </div>
                <h1 style="fontSize: 42px; font-weight: 700; letter-spacing: 0.5px; margin: 0; background: linear-gradient(135deg, #ff69b4, #ff1493); background-clip: text; -webkit-background-clip: text; color: transparent;">
                    Simple Coloring Ideas for Kids
                </h1>
            </div>
            <p style="margin: 16px 0; font-size: 20px; color: #444; font-weight: 400;">
                Fun, calming, and skill-building coloring activities designed for different ages—plus easy tutorials, playful games, and educator-approved tips to spark creativity!
            </p>
            <div style="background: linear-gradient(90deg, #fff0f5, #fef7f7); padding: 16px; border-radius: 12px; border-left: 4px solid #ff69b4; margin-top: 20px;">
                <p style="margin: 0; font-size: 16px; color: #555; font-style: italic;">
                    🎨 Coloring supports fine motor development, attention span, and creativity in children. These skills build the foundation for handwriting readiness and artistic self-expression.
                </p>
            </div>
        </section>

        <!-- Age-Appropriate Techniques -->
        <section aria-label="Age-Appropriate Coloring Techniques" style="margin-bottom: 32px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zM12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
                </svg>
                <h2 style="font-size: 32px; font-weight: 600; margin: 0; color: #111111;">
                    Age-Appropriate Coloring Techniques
                </h2>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                
                <!-- Toddlers Card -->
                <article style="background: #ffffff; border: 2px solid #ffe4e6; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(255, 182, 193, 0.08); transition: transform 0.2s ease;">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="width: 12px; height: 12px; background: linear-gradient(135deg, #ff91a4, #ffb6c1); border-radius: 50%;"></div>
                        <h3 style="margin: 0; font-size: 22px; color: #111; font-weight: 600;">Toddlers (1.5–3 years)</h3>
                    </div>
                    <p style="margin: 12px 0; color: #333; font-size: 16px;">
                        Start with <strong>large crayons</strong> and chunky markers for easy gripping. Focus on big, simple shapes on sturdy paper. Keep coloring sessions short (5-10 minutes) and celebrate scribbles and exploration rather than staying within lines.
                    </p>
                    <div style="background: #fff5f5; padding: 12px; border-radius: 8px; border-left: 3px solid #ff91a4;">
                        <p style="margin: 0; font-size: 14px; color: #555;">
                            <strong>Pro Tip:</strong> Try vertical surfaces like easels or taped wall paper to build shoulder stability—this helps develop the foundation for fine motor control later!
                        </p>
                    </div>
                </article>

                <!-- Preschool Card -->
                <article style="background: #ffffff; border: 2px solid #e0f2fe; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(33, 150, 243, 0.08);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="width: 12px; height: 12px; background: linear-gradient(135deg, #42a5f5, #64b5f6); border-radius: 50%;"></div>
                        <h3 style="margin: 0; font-size: 22px; color: #111; font-weight: 600;">Preschool (3–5 years)</h3>
                    </div>
                    <p style="margin: 12px 0; color: #333; font-size: 16px;">
                        Introduce the <strong>tripod grasp</strong> with shorter crayons or triangular crayons. Practice simple shapes and encourage light-to-medium pressure. This is when many children begin trying to color "inside the lines"!
                    </p>
                    <div style="background: #f3f9ff; padding: 12px; border-radius: 8px; border-left: 3px solid #42a5f5;">
                        <p style="margin: 0; font-size: 14px; color: #555;">
                            <strong>Milestone Alert:</strong> Coloring within lines is a big developmental step showing improved motor control and focus. Celebrate progress, not perfection!
                        </p>
                    </div>
                </article>

                <!-- Early Elementary Card -->
                <article style="background: #ffffff; border: 2px solid #e8f5e8; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(76, 175, 80, 0.08);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="width: 12px; height: 12px; background: linear-gradient(135deg, #66bb6a, #81c784); border-radius: 50%;"></div>
                        <h3 style="margin: 0; font-size: 22px; color: #111; font-weight: 600;">Early Elementary (5–8 years)</h3>
                    </div>
                    <p style="margin: 12px 0; color: #333; font-size: 16px;">
                        Explore <strong>neat edges</strong>, simple layering, and basic shading with colored pencils. Try light-to-dark gradients and two-color blends. Teach methodical filling with short, overlapping strokes.
                    </p>
                    <div style="background: #f8fff8; padding: 12px; border-radius: 8px; border-left: 3px solid #66bb6a;">
                        <p style="margin: 0; font-size: 14px; color: #555;">
                            <strong>Technique Tip:</strong> Short strokes in one direction reduce streaks and create smoother, more professional-looking results!
                        </p>
                    </div>
                </article>

                <!-- Tweens Card -->
                <article style="background: #ffffff; border: 2px solid #fff3e0; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(255, 152, 0, 0.08);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="width: 12px; height: 12px; background: linear-gradient(135deg, #ffa726, #ffcc02); border-radius: 50%;"></div>
                        <h3 style="margin: 0; font-size: 22px; color: #111; font-weight: 600;">Tweens (8–12 years)</h3>
                    </div>
                    <p style="margin: 12px 0; color: #333; font-size: 16px;">
                        Introduce <strong>cross-hatching</strong>, pressure control, and advanced color mixing. Challenge kids to plan color palettes and add highlights and shadows to create depth and dimension.
                    </p>
                    <div style="background: #fffbf0; padding: 12px; border-radius: 8px; border-left: 3px solid #ffa726;">
                        <p style="margin: 0; font-size: 14px; color: #555;">
                            <strong>Advanced Challenge:</strong> Try following step-by-step draw-and-color tutorials online for guided skill building and confidence boosting!
                        </p>
                    </div>
                </article>
            </div>
        </section>

        <!-- Creative Ideas & Themes -->
        <section aria-label="Creative Coloring Ideas" style="margin-bottom: 32px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
                    <path d="M9 21h6v-2H9v2zM12 2C8.13 2 5 5.13 5 9c0 3.25 2.17 5.98 5.09 6.75L10 19h4l-.09-3.25C16.83 14.98 19 12.25 19 9c0-3.87-3.13-7-7-7z"/>
                </svg>
                <h2 style="font-size: 32px; font-weight: 600; margin: 0; color: #111;">Creative Coloring Ideas & Themes</h2>
            </div>

            <div style="background: #ffffff; border: 2px solid #f0f4ff; border-radius: 16px; padding: 28px; box-shadow: 0 4px 20px rgba(63, 81, 181, 0.08);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                    
                    <div style="background: linear-gradient(135deg, #fff5f5, #fefefe); padding: 20px; border-radius: 12px; border: 1px solid #ffe4e6;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #d81b60; font-weight: 600;">🐾 Cozy Creatures</h4>
                        <p style="margin: 0; font-size: 15px; color: #444;">
                            Cats, puppies, axolotls, and bunnies with simple patterns on their fur. Try two-tone gradients and add dots or stripes for texture. Perfect for practicing gentle pressure and pattern-making!
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #f3f9ff, #fefefe); padding: 20px; border-radius: 12px; border: 1px solid #e3f2fd;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #1976d2; font-weight: 600;">🏠 My Friendly House</h4>
                        <p style="margin: 0; font-size: 15px; color: #444;">
                            Draw a big door, windows, and a cheerful sun. Color each window a different warm hue to explore color harmony and create a welcoming home scene.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #f8fff8, #fefefe); padding: 20px; border-radius: 12px; border: 1px solid #e8f5e8;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #388e3c; font-weight: 600;">🔸 Shape Safari</h4>
                        <p style="margin: 0; font-size: 15px; color: #444;">
                            Fill a page with circles, triangles, and squares. Transform them into animals, vehicles, or characters with faces and features while practicing staying within borders.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #fffbf0, #fefefe); padding: 20px; border-radius: 12px; border: 1px solid #fff3e0;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #f57c00; font-weight: 600;">🌸 Seasons & Holidays</h4>
                        <p style="margin: 0; font-size: 15px; color: #444;">
                            Fall leaves, winter snowflakes, spring flowers, summer beach scenes. Use themed color stories like "frosty blues" or "sunny yellows" to set the mood.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #fce4ec, #fefefe); padding: 20px; border-radius: 12px; border: 1px solid #f8bbd9;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #c2185b; font-weight: 600;">⭐ Favorite Characters</h4>
                        <p style="margin: 0; font-size: 15px; color: #444;">
                            Follow simple draw-and-color tutorials for beloved characters. Great for practicing flat fills, neat outlines, and following step-by-step instructions.
                        </p>
                    </div>

                    <div style="background: linear-gradient(135deg, #e8eaf6, #fefefe); padding: 20px; border-radius: 12px; border: 1px solid #d1c4e9;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #512da8; font-weight: 600;">🌈 Rainbow Science</h4>
                        <p style="margin: 0; font-size: 15px; color: #444;">
                            Experiment with color contrast and complementary pairs to discover which combinations really "pop" and create visual excitement!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Step-by-Step Guides -->
        <section aria-label="Step-by-Step Coloring Guides" style="margin-bottom: 32px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v12l4-4h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                </svg>
                <h2 style="font-size: 32px; font-weight: 600; margin: 0; color: #111;">Step-by-Step Coloring Guides</h2>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
                
                <!-- Rainbow Fish Guide -->
                <article style="background: #ffffff; border: 2px solid #e1f5fe; border-radius: 16px; padding: 24px; box-shadow: 0 6px 24px rgba(3, 169, 244, 0.1);">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #29b6f6, #4fc3f7); width: 8px; height: 40px; border-radius: 4px;"></div>
                        <div>
                            <h3 style="margin: 0; font-size: 20px; color: #111; font-weight: 600;">🐠 Rainbow Fish</h3>
                            <p style="margin: 0; font-size: 14px; color: #666;">Beginner • Ages 4+</p>
                        </div>
                    </div>
                    <ol style="margin: 16px 0 0 20px; padding: 0; color: #333;">
                        <li style="margin-bottom: 8px; font-size: 15px;">Outline a simple fish shape with one big eye and smiling mouth</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Divide the body into 5–6 curved stripes</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Color stripes in rainbow order using light pressure</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Revisit edges to darken slightly for outlined look</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Add tiny white gaps as "sparkles"</li>
                    </ol>
                    <div style="background: #f0f9ff; padding: 12px; border-radius: 8px; margin-top: 16px;">
                        <p style="margin: 0; font-size: 13px; color: #0277bd; font-weight: 500;">💡 Light-to-dark layering reduces streaks and builds rich color depth!</p>
                    </div>
                </article>

                <!-- Happy House Guide -->
                <article style="background: #ffffff; border: 2px solid #e8f5e8; border-radius: 16px; padding: 24px; box-shadow: 0 6px 24px rgba(76, 175, 80, 0.1);">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #66bb6a, #81c784); width: 8px; height: 40px; border-radius: 4px;"></div>
                        <div>
                            <h3 style="margin: 0; font-size: 20px; color: #111; font-weight: 600;">🏡 Happy House</h3>
                            <p style="margin: 0; font-size: 14px; color: #666;">Intermediate • Ages 5+</p>
                        </div>
                    </div>
                    <ol style="margin: 16px 0 0 20px; padding: 0; color: #333;">
                        <li style="margin-bottom: 8px; font-size: 15px;">Draw rectangle (house) + triangle (roof) + door + two windows</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Pick a 3-color palette (warm door, cool roof, neutral walls)</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Fill large areas with short, even strokes in one direction</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Shade roof edge slightly darker for depth</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Add sunshine corner and simple garden shapes</li>
                    </ol>
                    <div style="background: #f8fff8; padding: 12px; border-radius: 8px; margin-top: 16px;">
                        <p style="margin: 0; font-size: 13px; color: #2e7d32; font-weight: 500;">💡 Three harmonious colors help kids focus on technique over decision-making!</p>
                    </div>
                </article>

                <!-- Friendly Robot Guide -->
                <article style="background: #ffffff; border: 2px solid #fff3e0; border-radius: 16px; padding: 24px; box-shadow: 0 6px 24px rgba(255, 152, 0, 0.1);">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #ffa726, #ffb74d); width: 8px; height: 40px; border-radius: 4px;"></div>
                        <div>
                            <h3 style="margin: 0; font-size: 20px; color: #111; font-weight: 600;">🤖 Friendly Robot</h3>
                            <p style="margin: 0; font-size: 14px; color: #666;">Advanced • Ages 7+</p>
                        </div>
                    </div>
                    <ol style="margin: 16px 0 0 20px; padding: 0; color: #333;">
                        <li style="margin-bottom: 8px; font-size: 15px;">Sketch rectangle (body) + square (head) + simple arms/legs</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Choose two grays and a pop color (like teal) for buttons</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Color lightly, then add darker edges for metal panels</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Blend two grays where panels meet for smooth transitions</li>
                        <li style="margin-bottom: 8px; font-size: 15px;">Add tiny white highlight on buttons for "shine" effect</li>
                    </ol>
                    <div style="background: #fffbf0; padding: 12px; border-radius: 8px; margin-top: 16px;">
                        <p style="margin: 0; font-size: 13px; color: #ef6c00; font-weight: 500;">💡 Multiple thin layers blend best with colored pencils—keep points sharp!</p>
                    </div>
                </article>
            </div>
        </section>

        <!-- Fun Activities & Games -->
        <section aria-label="Fun Coloring Activities" style="margin-bottom: 32px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
                    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>
                </svg>
                <h2 style="font-size: 32px; font-weight: 600; margin: 0; color: #111;">Fun Coloring Activities & Games</h2>
            </div>

            <div style="background: #ffffff; border: 2px solid #f3e5f5; border-radius: 16px; padding: 28px; box-shadow: 0 4px 20px rgba(156, 39, 176, 0.08);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    
                    <div style="padding: 20px; background: linear-gradient(135deg, #fff8e1, #ffffff); border-radius: 12px; border: 1px solid #ffecb3;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #f57f17; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                            🔍 <span>Color Scavenger Hunt</span>
                        </h4>
                        <p style="margin: 0; font-size: 15px; color: #444; line-height: 1.5;">
                            Find objects around your home that match your crayon colors, then color a page using those same hues. Boosts observation skills and color vocabulary!
                        </p>
                    </div>

                    <div style="padding: 20px; background: linear-gradient(135deg, #e3f2fd, #ffffff); border-radius: 12px; border: 1px solid #bbdefb;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #1565c0; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                            🎲 <span>Roll-a-Color</span>
                        </h4>
                        <p style="margin: 0; font-size: 15px; color: #444; line-height: 1.5;">
                            Assign each die number a different color, roll the dice, and fill the next section with that color. Adds fun randomness and surprise to coloring!
                        </p>
                    </div>

                    <div style="padding: 20px; background: linear-gradient(135deg, #e8f5e8, #ffffff); border-radius: 12px; border: 1px solid #c8e6c9;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #2e7d32; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                            🤝 <span>Pattern Pass</span>
                        </h4>
                        <p style="margin: 0; font-size: 15px; color: #444; line-height: 1.5;">
                            Each child adds a pattern (dots, stripes, zigzags) then passes the page to the next person. Encourages collaboration and creative teamwork!
                        </p>
                    </div>

                    <div style="padding: 20px; background: linear-gradient(135deg, #fce4ec, #ffffff); border-radius: 12px; border: 1px solid #f8bbd9;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #c2185b; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                            ✨ <span>Finish-the-Picture</span>
                        </h4>
                        <p style="margin: 0; font-size: 15px; color: #444; line-height: 1.5;">
                            Start with a partial drawing and let kids complete and color it however they imagine. Supports creative thinking and planning skills!
                        </p>
                    </div>

                    <div style="padding: 20px; background: linear-gradient(135deg, #f3e5f5, #ffffff); border-radius: 12px; border: 1px solid #e1bee7; grid-column: 1 / -1;">
                        <h4 style="margin: 0 0 12px 0; font-size: 18px; color: #7b1fa2; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                            📺 <span>Follow-Along Tutorials</span>
                        </h4>
                        <p style="margin: 0; font-size: 15px; color: #444; line-height: 1.5;">
                            Watch age-appropriate draw-and-color video lessons online. Kids can pause, rewind, and work at their own pace while building confidence with guided instruction. Perfect for independent learning time!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Educational Benefits -->
        <section aria-label="Educational Benefits" style="margin-bottom: 32px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3 19h18v2H3z"/>
                </svg>
                <h2 style="font-size: 32px; font-weight: 600; margin: 0; color: #111;">Educational Benefits of Coloring</h2>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                
                <div style="background: #ffffff; border: 2px solid #e8f5e8; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(76, 175, 80, 0.08);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #66bb6a, #81c784); padding: 8px; border-radius: 10px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <h3 style="margin: 0; font-size: 20px; color: #2e7d32; font-weight: 600;">Fine Motor & Pre-Writing Skills</h3>
                    </div>
                    <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">
                        Coloring strengthens the small hand muscles, improves dexterity, and builds endurance. These skills directly transfer to letter formation, scissor use, and other academic tasks requiring precise hand control.
                    </p>
                </div>

                <div style="background: #ffffff; border: 2px solid #e1f5fe; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(3, 169, 244, 0.08);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #29b6f6, #4fc3f7); padding: 8px; border-radius: 10px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        </div>
                        <h3 style="margin: 0; font-size: 20px; color: #0277bd; font-weight: 600;">Focus & Self-Regulation</h3>
                    </div>
                    <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">
                        Choosing colors, staying within lines, and working methodically builds sustained attention and planning skills. Children learn to slow down, concentrate, and see tasks through to completion.
                    </p>
                </div>

                <div style="background: #ffffff; border: 2px solid #fff3e0; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(255, 152, 0, 0.08);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #ffa726, #ffb74d); padding: 8px; border-radius: 10px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 3.25 2.17 5.98 5.09 6.75L10 19h4l-.09-3.25C16.83 14.98 19 12.25 19 9c0-3.87-3.13-7-7-7z"/>
                            </svg>
                        </div>
                        <h3 style="margin: 0; font-size: 20px; color: #ef6c00; font-weight: 600;">Creativity & Expression</h3>
                    </div>
                    <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">
                        Kids practice visual decision-making, explore color relationships, and tell stories through their artistic choices. Each completed page represents their unique perspective and creative voice.
                    </p>
                </div>

                <div style="background: #ffffff; border: 2px solid #f3e5f5; border-radius: 16px; padding: 24px; box-shadow: 0 4px 20px rgba(156, 39, 176, 0.08);">
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                        <div style="background: linear-gradient(135deg, #ab47bc, #ba68c8); padding: 8px; border-radius: 10px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83z"/>
                            </svg>
                        </div>
                        <h3 style="margin: 0; font-size: 20px; color: #7b1fa2; font-weight: 600;">Calm & Stress Relief</h3>
                    </div>
                    <p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">
                        The repetitive, low-pressure nature of coloring has meditation-like benefits. It provides a peaceful break from high-energy activities and helps children self-regulate emotions.
                    </p>
                </div>
            </div>
        </section>

        <!-- Quick Tips for Success -->
        <section aria-label="Quick Tips" style="margin-bottom: 32px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
                    <path d="M18 2H6a2 2 0 0 0-2 2v16l6-3 6 3V4a2 2 0 0 0-2-2z"/>
                </svg>
                <h2 style="font-size: 32px; font-weight: 600; margin: 0; color: #111;">Quick Tips for Coloring Success</h2>
            </div>

            <div style="background: linear-gradient(135deg, #fff5f5, #ffffff); border: 2px solid #ffcdd2; border-radius: 16px; padding: 28px; box-shadow: 0 4px 20px rgba(244, 67, 54, 0.08);">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    
                    <div style="display: flex; gap: 12px;">
                        <div style="background: #ff6b6b; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0; margin-top: 2px;">1</div>
                        <div>
                            <h4 style="margin: 0 0 6px 0; font-size: 16px; color: #111; font-weight: 600;">Start Light, Build Up</h4>
                            <p style="margin: 0; font-size: 14px; color: #555;">Begin with light pressure and gradually add more color. This prevents waxy buildup and allows for easier corrections.</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px;">
                        <div style="background: #4ecdc4; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0; margin-top: 2px;">2</div>
                        <div>
                            <h4 style="margin: 0 0 6px 0; font-size: 16px; color: #111; font-weight: 600;">Keep It Short & Sweet</h4>
                            <p style="margin: 0; font-size: 14px; color: #555;">Younger kids do best with 10-15 minute sessions. Quality over quantity—celebrate finished sections rather than completed pages.</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px;">
                        <div style="background: #45b7d1; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0; margin-top: 2px;">3</div>
                        <div>
                            <h4 style="margin: 0 0 6px 0; font-size: 16px; color: #111; font-weight: 600;">Mix Up the Tools</h4>
                            <p style="margin: 0; font-size: 14px; color: #555;">Rotate between crayons, colored pencils, and markers to keep interest high and develop different skills.</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px;">
                        <div style="background: #f7b733; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0; margin-top: 2px;">4</div>
                        <div>
                            <h4 style="margin: 0 0 6px 0; font-size: 16px; color: #111; font-weight: 600;">Celebrate Progress</h4>
                            <p style="margin: 0; font-size: 14px; color: #555;">Focus on effort and creativity rather than "staying in the lines." Every child develops at their own pace—encourage their unique style!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Safety & Final Notes -->
        <section aria-label="Safety Notes" style="margin-bottom: 40px;">
            <div style="background: linear-gradient(135deg, #e8f5e8, #f8fff8); border: 2px solid #c8e6c9; border-radius: 16px; padding: 24px; border-left: 6px solid #66bb6a;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#2e7d32">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <h3 style="margin: 0; font-size: 18px; color: #2e7d32; font-weight: 600;">Remember: Safety First & Fun Always!</h3>
                </div>
                <p style="margin: 8px 0; font-size: 15px; color: #388e3c; line-height: 1.6;">
                    Always supervise toddlers with small art supplies. Encourage regular breaks for movement and hydration. Most importantly, celebrate every colorful creation—there's no such thing as "perfect" in art, only personal expression and joy! 🎨✨
                </p>
            </div>
        </section>

    </main>
</body>
        `,
        }}
      />
   
  );
}
